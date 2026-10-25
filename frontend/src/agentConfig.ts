export type FieldType = "text" | "textarea" | "number" | "checkbox";

export interface AgentField {
  name: string;
  label: string;
  type: FieldType;
  rows?: number;
  placeholder?: string;
}

export interface AgentConfig {
  slug: string;
  title: string;
  tagline: string;
  purpose: string;
  accent: string;
  features: string[];
  limitations: string[];
  fields: AgentField[];
  sample: Record<string, string | number | boolean>;
  repo: string;
}

export const agent: AgentConfig = {
  "slug": "plotxyz-documentation-generator-agent",
  "title": "Documentation Generator",
  "tagline": "Documentation that stays close to the code.",
  "purpose": "Parses Python source and generates a Markdown reference for functions, classes, methods, signatures, and docstrings.",
  "accent": "#94a3b8",
  "features": [
    "AST-derived symbol reference",
    "Signature and docstring extraction",
    "Undocumented-symbol report"
  ],
  "limitations": [
    "Behavior is not inferred beyond supplied docstrings.",
    "No prose generation or external model is required."
  ],
  "fields": [
    {
      "name": "code",
      "label": "Python source",
      "type": "textarea",
      "rows": 10,
      "placeholder": ""
    },
    {
      "name": "module_name",
      "label": "Module name",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    }
  ],
  "sample": {
    "code": "\"\"\"Order helpers.\"\"\"\n\ndef total(items):\n    \"\"\"Return the sum of item prices.\"\"\"\n    return sum(item[\"price\"] for item in items)\n\nclass Order:\n    \"\"\"A customer order.\"\"\"\n    def __init__(self, items):\n        self.items = items",
    "module_name": "orders"
  },
  "repo": "https://github.com/sukhee-2626/plotxyz-documentation-generator-agent"
};
