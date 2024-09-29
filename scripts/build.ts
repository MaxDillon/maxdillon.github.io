import { build } from "astro";
import config from "../astro.config.mjs";

const server = await build(config);
