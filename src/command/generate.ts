import fs from "fs";
import path from "path";
import * as vscode from "vscode";
import { getRootPath } from "../utils/helper";

const ROOT: string = getRootPath() ?? "/";
const JSON_PATH = path.join(ROOT, ".vscode", "flutter-craft.json");

function addFL(fl: string, structure: [string]) {
  structure.forEach((s) => {
    let newFl = s.replaceAll("<fl>", fl);
    const fullPath = path.join(ROOT, newFl);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
}

const generateCommand = () => {
  // Read the JSON file
  fs.readFile(JSON_PATH, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      vscode.window
        .showInputBox({ placeHolder: "Feature/Layer name (<fl>)" })
        .then((fl) => {
          if (fl) {
            addFL(fl, jsonData.structure);
          }
        })
        .then(() => {
          vscode.window.showInformationMessage(
            "Generate command executed successfully!"
          );
        });
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });
};

export default generateCommand;
