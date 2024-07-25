import * as vscode from "vscode";

export const getRootPath = () => {
  if (vscode.workspace.workspaceFolders !== undefined) {
    const uri = vscode.workspace.workspaceFolders[0].uri;

    return uri.fsPath;
  }
};
