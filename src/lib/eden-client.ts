import { edenTreaty } from "@elysiajs/eden";
import type { API } from "../api";

export const client = edenTreaty<API>("/api");
