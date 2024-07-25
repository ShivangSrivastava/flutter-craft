import fs from "fs";
import path from "path";
import * as vscode from "vscode";

const additionalDirCommand = () => {
  let message;
  if (vscode.workspace.workspaceFolders !== undefined) {
    let root = vscode.workspace.workspaceFolders[0].uri.path;

    let dir = `${root}/lib`;
    if (!fs.existsSync(dir)) {
      additionalDir(root.substring(1));
      message = `FlutterCleanArch: Additional folders created.`;
      vscode.window.showInformationMessage(message);
    } else {
      message =
        "FlutterCleanArch: Working folder not found, open a folder an try again";

      vscode.window.showErrorMessage(message);
    }
  }
};

const SUB_DIRS: string[] = [
  "assets/fonts",
  "assets/images",
  "assets/vectors",
  "lib/config/routes",
  "lib/config/theme",
  "lib/core/error",
  "lib/core/network",
  "lib/core/usecases",
  "lib/core/util",
];

function additionalDir(dir: string) {
  SUB_DIRS.forEach((subDir) => {
    const fullPath = path.join(dir, subDir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
}
export default additionalDirCommand;
