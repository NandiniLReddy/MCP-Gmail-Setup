//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const send_emailEval: EvalFunction = {
    name: 'Send Email Tool Evaluation',
    description: 'Evaluates the functionality of sending a new email',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please send an email with the subject 'Hello' and the body 'Testing the email' to email@example.com.");
        return JSON.parse(result);
    }
};

const draft_emailEval: EvalFunction = {
    name: 'draft_email Tool Evaluation',
    description: 'Evaluates the correctness of drafting an email',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Draft an email to the HR department requesting more information about the new vacation policies. The email should have a polite greeting, mention the specific questions regarding the policies, and include a cordial closing.");
        return JSON.parse(result);
    }
};

const read_emailEval: EvalFunction = {
    name: "read_email Tool Evaluation",
    description: "Evaluates the read_email tool functionality",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please show me the content of the email matching the subject 'Upcoming Project Deadline'");
        return JSON.parse(result);
    }
};

const search_emailsEval: EvalFunction = {
    name: 'search_emails Tool Evaluation',
    description: 'Evaluates searching emails using Gmail search syntax',
    run: async () => {
        const result = await grade(openai("gpt-4"), "How can I find all unread emails from last month from my boss using Gmail search syntax?");
        return JSON.parse(result);
    }
};

const modify_emailEval: EvalFunction = {
    name: "modify_email tool evaluation",
    description: "Evaluates the modify_email tool's ability to change email labels or folders",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please move the email with subject 'Project Update' from the 'Inbox' folder to the 'Work' folder.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [send_emailEval, draft_emailEval, read_emailEval, search_emailsEval, modify_emailEval]
};
  
export default config;
  
export const evals = [send_emailEval, draft_emailEval, read_emailEval, search_emailsEval, modify_emailEval];