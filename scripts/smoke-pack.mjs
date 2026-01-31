import { execSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

function sh(cmd, opts = {}) {
  return execSync(cmd, { stdio: "inherit", ...opts });
}

const pkgName = execSync('node -p "require(\'./package.json\').name"').toString().trim();

console.log("Building...");
sh("npm run build");

console.log("Packing...");
const tgz = execSync("npm pack --silent").toString().trim();

console.log("Checking dist types exist in tarball...");
execSync(`tar -tf "${tgz}" | grep -q "package/dist/.*\\.d\\.ts"`, { stdio: "inherit" });

const consumerDir = mkdtempSync(path.join(tmpdir(), "pkg-consumer-"));
console.log("Consumer dir:", consumerDir);

try {
  sh("npm init -y", { cwd: consumerDir, stdio: "ignore" });
  sh(`npm i "${path.resolve(tgz)}"`, { cwd: consumerDir });

  // ESM-friendly import check
  writeFileSync(
    path.join(consumerDir, "smoke.mjs"),
    `
      import * as lib from "${pkgName}";
      if (!lib || Object.keys(lib).length === 0) {
        throw new Error("No exports found from package");
      }
      console.log("Exports:", Object.keys(lib).slice(0, 20));
    `
  );

  sh("node smoke.mjs", { cwd: consumerDir });
  console.log("✅ Smoke test passed: package installs + imports");
} finally {
  rmSync(consumerDir, { recursive: true, force: true });
}
