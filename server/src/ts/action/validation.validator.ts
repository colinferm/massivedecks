/* eslint-disable */
// generated by typescript-json-validator
import Ajv from "ajv";
import { RegisterUser, CreateLobby, Action, CheckAlive } from "./validation";
import ajv0 from "ajv/lib/refs/json-schema-draft-06.json";

export const ajv = new Ajv({
  allErrors: false,
  coerceTypes: false,
  format: "full",
  nullable: true,
  unicode: true,
  uniqueItems: true,
  useDefaults: true
});

ajv.addMetaSchema(ajv0);

export { RegisterUser, CreateLobby, Action, CheckAlive };
export const Schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    Action: {
      anyOf: [
        {
          $ref: "#/definitions/Authenticate"
        },
        {
          $ref: "#/definitions/Judge"
        },
        {
          $ref: "#/definitions/Reveal"
        },
        {
          $ref: "#/definitions/Submit"
        },
        {
          $ref: "#/definitions/TakeBack"
        },
        {
          $ref: "#/definitions/Redraw"
        },
        {
          $ref: "#/definitions/ChangeDecks"
        },
        {
          $ref: "#/definitions/SetHandSize"
        },
        {
          $ref: "#/definitions/SetPassword"
        },
        {
          $ref: "#/definitions/SetPublic"
        },
        {
          $ref: "#/definitions/SetScoreLimit"
        },
        {
          $ref: "#/definitions/ChangeHouseRule"
        },
        {
          $ref: "#/definitions/StartGame"
        }
      ]
    },
    Authenticate: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Authenticate with the game.",
      properties: {
        action: {
          $ref: "#/definitions/NameType"
        },
        token: {
          $ref: "#/definitions/Token"
        }
      },
      required: ["action", "token"],
      type: "object"
    },
    Cardcast: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A source for Cardcast.",
      properties: {
        playCode: {
          $ref: "#/definitions/PlayCode"
        },
        source: {
          enum: ["Cardcast"],
          type: "string"
        }
      },
      required: ["playCode", "source"],
      type: "object"
    },
    Change: {
      anyOf: [
        {
          $ref: "#/definitions/ChangeBasePackingHeat"
        },
        {
          $ref: "#/definitions/ChangeBaseRando"
        },
        {
          $ref: "#/definitions/ChangeBaseReboot"
        }
      ]
    },
    "ChangeBase.HouseRule": {
      $ref: "#/definitions/PackingHeat"
    },
    "ChangeBase.HouseRule_1": {
      $ref: "#/definitions/Rando"
    },
    "ChangeBase.HouseRule_2": {
      $ref: "#/definitions/Reboot"
    },
    "ChangeBase.Name": {
      enum: ["PackingHeat"],
      type: "string"
    },
    "ChangeBase.Name_1": {
      enum: ["Rando"],
      type: "string"
    },
    "ChangeBase.Name_2": {
      enum: ["Reboot"],
      type: "string"
    },
    ChangeBasePackingHeat: {
      additionalProperties: false,
      defaultProperties: [],
      properties: {
        houseRule: {
          $ref: "#/definitions/ChangeBase.Name"
        },
        settings: {
          $ref: "#/definitions/ChangeBase.HouseRule"
        }
      },
      required: ["houseRule"],
      type: "object"
    },
    ChangeBaseRando: {
      additionalProperties: false,
      defaultProperties: [],
      properties: {
        houseRule: {
          $ref: "#/definitions/ChangeBase.Name_1"
        },
        settings: {
          $ref: "#/definitions/ChangeBase.HouseRule_1"
        }
      },
      required: ["houseRule"],
      type: "object"
    },
    ChangeBaseReboot: {
      additionalProperties: false,
      defaultProperties: [],
      properties: {
        houseRule: {
          $ref: "#/definitions/ChangeBase.Name_2"
        },
        settings: {
          $ref: "#/definitions/ChangeBase.HouseRule_2"
        }
      },
      required: ["houseRule"],
      type: "object"
    },
    ChangeDecks: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Make a change to the configuration of decks for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_3"
        },
        change: {
          $ref: "#/definitions/PlayerDriven"
        },
        deck: {
          $ref: "#/definitions/External"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        }
      },
      required: ["action", "change", "deck", "if"],
      type: "object"
    },
    ChangeHouseRule: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Set the hand size for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_8"
        },
        change: {
          $ref: "#/definitions/Change"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        }
      },
      required: ["action", "change", "if"],
      type: "object"
    },
    CheckAlive: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Previously obtained tokens to check the validity of.",
      properties: {
        tokens: {
          items: {
            type: "string"
          },
          type: "array"
        }
      },
      required: ["tokens"],
      type: "object"
    },
    CreateLobby: {
      additionalProperties: false,
      defaultProperties: [],
      description: "The details needed to create a new lobby.",
      properties: {
        name: {
          description:
            'The name of the lobby, if not given, will default to "Name\'s Game".',
          type: "string"
        },
        owner: {
          $ref: "#/definitions/RegisterUser",
          description: "The registration for the owner of the lobby."
        }
      },
      required: ["owner"],
      type: "object"
    },
    External: {
      $ref: "#/definitions/Cardcast",
      description: "A source for Cardcast."
    },
    Id: {
      description: "A unique id for a play.",
      format: "uuid",
      type: "string"
    },
    Judge: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A user declares the winning play for a round.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_1"
        },
        winner: {
          $ref: "#/definitions/Id"
        }
      },
      required: ["action", "winner"],
      type: "object"
    },
    Name: {
      description: "The name the user goes by.",
      maxLength: 100,
      minLength: 1,
      type: "string"
    },
    NameType: {
      enum: ["Authenticate"],
      type: "string"
    },
    NameType_1: {
      enum: ["Judge"],
      type: "string"
    },
    NameType_2: {
      enum: ["Reveal"],
      type: "string"
    },
    NameType_3: {
      enum: ["ChangeDecks"],
      type: "string"
    },
    NameType_4: {
      enum: ["SetHandSize"],
      type: "string"
    },
    NameType_5: {
      enum: ["SetPassword"],
      type: "string"
    },
    NameType_6: {
      enum: ["SetPublic"],
      type: "string"
    },
    NameType_7: {
      enum: ["SetScoreLimit"],
      type: "string"
    },
    NameType_8: {
      enum: ["ChangeHouseRule"],
      type: "string"
    },
    NameType_9: {
      enum: ["StartGame"],
      type: "string"
    },
    PackingHeat: {
      additionalProperties: false,
      defaultProperties: [],
      description: 'Configuration for the "Packing Heat" house rule.',
      type: "object"
    },
    PlayCode: {
      description: "A Cardcast play code for a deck.",
      type: "string"
    },
    PlayerDriven: {
      enum: ["Add", "Remove"],
      type: "string"
    },
    Rando: {
      additionalProperties: false,
      defaultProperties: [],
      properties: {
        number: {
          description: "The number of AI players to add to the game.",
          maximum: 10,
          minimum: 1,
          type: "integer"
        }
      },
      required: ["number"],
      type: "object"
    },
    Reboot: {
      additionalProperties: false,
      defaultProperties: [],
      description:
        'Configuration for the "Reboot the Universe" house rule.\nThis rule allows players to draw a new hand by sacrificing a given number\nof points.',
      properties: {
        cost: {
          description: "The cost to redrawing.",
          maximum: 50,
          minimum: 1,
          type: "integer"
        }
      },
      required: ["cost"],
      type: "object"
    },
    Redraw: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player plays a white card into a round.",
      properties: {
        action: {
          enum: ["Redraw"],
          type: "string"
        }
      },
      required: ["action"],
      type: "object"
    },
    RegisterUser: {
      additionalProperties: false,
      defaultProperties: [],
      description: "The details to register a new user for a lobby.",
      properties: {
        name: {
          $ref: "#/definitions/Name",
          description: "The name the user wishes to use."
        },
        password: {
          description:
            "The lobby password, if there is one, this must be given and correct.",
          type: "string"
        }
      },
      required: ["name"],
      type: "object"
    },
    Reveal: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A user judges the winning play for a round.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_2"
        },
        play: {
          $ref: "#/definitions/Id"
        }
      },
      required: ["action", "play"],
      type: "object"
    },
    SetHandSize: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Set the hand size for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_4"
        },
        handSize: {
          description: "The number of cards in each player's hand.",
          minimum: 3,
          type: "integer"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        }
      },
      required: ["action", "handSize", "if"],
      type: "object"
    },
    SetPassword: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Set (or unset) the password for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_5"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        },
        password: {
          maxLength: 100,
          minLength: 1,
          type: "string"
        }
      },
      required: ["action", "if"],
      type: "object"
    },
    SetPublic: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Set (or unset) the password for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_6"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        },
        public: {
          type: "boolean"
        }
      },
      required: ["action", "if", "public"],
      type: "object"
    },
    SetScoreLimit: {
      additionalProperties: false,
      defaultProperties: [],
      description: "(Un)Set the score limit for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_7"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        },
        scoreLimit: {
          description:
            "The score threshold for the game - when a player hits this they win.\nIf not set, then there is end - the game goes on infinitely.",
          minimum: 1,
          type: "integer"
        }
      },
      required: ["action", "if"],
      type: "object"
    },
    StartGame: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Start a game in the lobby if possible.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_9"
        }
      },
      required: ["action"],
      type: "object"
    },
    Submit: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player plays a white card into a round.",
      properties: {
        action: {
          enum: ["Submit"],
          type: "string"
        },
        play: {
          items: {
            type: "string"
          },
          type: "array"
        }
      },
      required: ["action", "play"],
      type: "object"
    },
    TakeBack: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player plays a white card into a round.",
      properties: {
        action: {
          enum: ["TakeBack"],
          type: "string"
        }
      },
      required: ["action"],
      type: "object"
    },
    Token: {
      description: "A token that contains the encoded claims of a user.",
      type: "string"
    }
  }
};
ajv.addSchema(Schema, "Schema");
export function validate(
  typeName: "RegisterUser"
): (value: unknown) => RegisterUser;
export function validate(
  typeName: "CreateLobby"
): (value: unknown) => CreateLobby;
export function validate(typeName: "Action"): (value: unknown) => Action;
export function validate(
  typeName: "CheckAlive"
): (value: unknown) => CheckAlive;
export function validate(typeName: string): (value: unknown) => any {
  const validator: any = ajv.getSchema(`Schema#/definitions/${typeName}`);
  return (value: unknown): any => {
    if (!validator) {
      throw new Error(
        `No validator defined for Schema#/definitions/${typeName}`
      );
    }

    const valid = validator(value);

    if (!valid) {
      throw new Error(
        "Invalid " +
          typeName +
          ": " +
          ajv.errorsText(validator.errors, { dataVar: typeName })
      );
    }

    return value as any;
  };
}