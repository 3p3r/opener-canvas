import { CustomModelConfig, ModelConfigurationParams } from "./types.js";

const OPENAI_MODELS: ModelConfigurationParams[] = [
  {
    name: "gpt-4.1",
    label: "GPT 4.1",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 32_768,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: true,
  },
  {
    name: "gpt-4.1-mini",
    label: "GPT 4.1 mini",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 32_768,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: true,
  },
  {
    name: "o4-mini",
    label: "o4 mini",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 100_000,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: true,
  },
  {
    name: "gpt-4o",
    label: "GPT 4o",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 16_384,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
  {
    name: "gpt-4o-mini",
    label: "GPT 4o mini",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 16_384,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
  {
    name: "gpt-4.5-preview",
    label: "GPT 4.5",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 16_384,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
  {
    name: "o3-mini",
    label: "o3 mini",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 100_000,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
  {
    name: "o1-mini",
    label: "o1 mini",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 65_536,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
  {
    name: "o1",
    label: "o1",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 100_000,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
];

/**
 * Ollama model names _MUST_ be prefixed with `"ollama-"`
 */
const OLLAMA_MODELS = [
  {
    name: "ollama-llama3.3",
    label: "Llama 3.3 70B (local)",
    config: {
      provider: "ollama",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 2_048,
        default: 2_048,
        current: 2_048,
      },
    },
    isNew: false,
  },
];

const ANTHROPIC_MODELS = [
  {
    name: "claude-sonnet-4-0",
    label: "Claude Sonnet 4",
    config: {
      provider: "anthropic",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 64_000,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: true,
  },
  {
    name: "claude-opus-4-0",
    label: "Claude Opus 4",
    config: {
      provider: "anthropic",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 32_000,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: true,
  },
  {
    name: "claude-3-7-sonnet-latest",
    label: "Claude 3.7 Sonnet",
    config: {
      provider: "anthropic",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 8_192,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
  {
    name: "claude-3-5-sonnet-latest",
    label: "Claude 3.5 Sonnet",
    config: {
      provider: "anthropic",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 8_192,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
  {
    name: "claude-3-5-haiku-20241022",
    label: "Claude 3.5 Haiku",
    config: {
      provider: "anthropic",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 8_192,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
  {
    name: "claude-3-haiku-20240307",
    label: "Claude 3 Haiku (old)",
    config: {
      provider: "anthropic",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 4_096,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: false,
  },
];

export const LANGCHAIN_USER_ONLY_MODELS = [
  "o1",
  "gpt-4o",
  "gpt-4.5-preview",
  "claude-3-5-sonnet-latest",
  "claude-3-7-sonnet-latest",
  "claude-sonnet-4-0",
  "claude-opus-4-0",
  "gpt-4.1",
];

// Models which do NOT support the temperature parameter.
export const TEMPERATURE_EXCLUDED_MODELS = [
  "o1-mini",
  "o3-mini",
  "o1",
  "o4-mini",
];

// Models which do NOT stream back tool calls.
export const NON_STREAMING_TOOL_CALLING_MODELS = [
  // todo
];

// Models which do NOT stream back text.
export const NON_STREAMING_TEXT_MODELS = [
  "o1",
];

// Models which preform CoT before generating a final response.
export const THINKING_MODELS = [
  // todo
];

export const ALL_MODELS: ModelConfigurationParams[] = [
  ...OPENAI_MODELS,
  ...ANTHROPIC_MODELS,
  ...OLLAMA_MODELS,
];

type OPENAI_MODEL_NAMES = (typeof OPENAI_MODELS)[number]["name"];
type ANTHROPIC_MODEL_NAMES = (typeof ANTHROPIC_MODELS)[number]["name"];
type OLLAMA_MODEL_NAMES = (typeof OLLAMA_MODELS)[number]["name"];
export type ALL_MODEL_NAMES =
  | OPENAI_MODEL_NAMES
  | ANTHROPIC_MODEL_NAMES
  | OLLAMA_MODEL_NAMES;

export const DEFAULT_MODEL_NAME: ALL_MODEL_NAMES = OPENAI_MODELS[1].name;
export const DEFAULT_MODEL_CONFIG: CustomModelConfig = {
  ...OPENAI_MODELS[1].config,
  temperatureRange: { ...OPENAI_MODELS[1].config.temperatureRange },
  maxTokens: { ...OPENAI_MODELS[1].config.maxTokens },
};
