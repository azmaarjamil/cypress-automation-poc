/* eslint-disable @typescript-eslint/no-var-requires */
import cucumber from "cypress-cucumber-preprocessor";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  defaultOptions
} from "@cypress/browserify-preprocessor";

const path = require("path");
const fs = require("fs-extra");



export default (on, config) => {
  const options = {
    ...defaultOptions
    , typescript: require.resolve("typescript")
  , };

  on("file:preprocessor", cucumber(options));

  const file = config.env.fileConfig || "juice-shop";
  console.log(`The value of file config is ${config.env.fileConfig}`);
  const pathToConfigFile = path.resolve(
    __dirname
    , "../environments"
    , `${file}.json`
  );
  console.log(pathToConfigFile);

  return fs.readJson(pathToConfigFile);
};