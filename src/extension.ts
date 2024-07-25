import * as vscode from "vscode";
import additionalDirCommand from "./command/additional";
import { initCommand } from "./command/init";
import generateCommand from "./command/generate";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "fluttercleanarch" is now active!'
  );
  const init = vscode.commands.registerCommand(
    "flutter-craft.init",
    initCommand
  );
  const generate = vscode.commands.registerCommand(
    "flutter-craft.generate",
    generateCommand
  );
  const additional = vscode.commands.registerCommand(
    "flutter-craft.additional",
    additionalDirCommand
  );
  context.subscriptions.push(init);
  context.subscriptions.push(generate);
  context.subscriptions.push(additional);
}

export function deactivate() {}
