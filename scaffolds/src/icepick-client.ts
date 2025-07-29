import { Icepick } from "@hatchet-dev/icepick/src";
import { openai } from "@ai-sdk/openai";

export const icepick = Icepick.init({
    defaultLanguageModel: openai("gpt-4o-mini"),
});
