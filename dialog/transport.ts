interface Entity {
  type: string;
  value: any;
  tokens: {
    start: number;
    end: number;
  };
}

enum EntityType {
  Geo = "YANDEX.GEO",
  Name = "YANDEX.FIO",
  Number = "YANDEX.NUMBER",
  Datetime = "YANDEX.DATETIME"
}

interface GeoEntity extends Entity {
  type: EntityType.Geo;
  value: {
    city?: string;
    house_number?: string;
    street?: string;
  };
}

interface NameEntity extends Entity {
  type: EntityType.Name;
  value: {
    first_name: string;
    last_name: string;
  };
}

interface NumberEntity extends Entity {
  type: EntityType.Number;
  value: number;
}

interface DatetimeEntity extends Entity {
  type: EntityType.Datetime;
  value: {
    day: number;
    day_is_relative: boolean;
  };
}

type AnyEntity = GeoEntity | NameEntity | NumberEntity | DatetimeEntity;

export interface IncomingMessage {
    request: {
        original_utterance: string;
        command: string;
        nlu: {
            tokens: string[];
            entities: AnyEntity[];
        };
    };
    session: {
        user_id: string;
    };
    version: string;
};

export function extractCity(message: IncomingMessage): string | null {
  const { entities } = message.request.nlu ;

  for (const entity of entities) {
    if (entity.type === EntityType.Geo && entity.value.city) {
      const { city } = entity.value;

      if (city) {
        return city;
      }
    }
  }

  return null;
}

export interface Response {
    text: string;
    tts?: string;
    card?: {
        type: 'BigImage';
        image_id: string;
        mds_namespace?: string;
        title: string;
        description: string;
        button?: {
            text: string;
            url: string;
            payload?: any;
        };
    };
    buttons?: Array<{
        title: string,
        payload?: any,
        url?: string;
        hide?: boolean;
    }>;
    end_session?: boolean;
}

export interface OutgoingMessage {
    response: Response;
    session: {
        user_id: string;
    };
    version: string;
}
