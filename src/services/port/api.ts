import { produce } from "immer";
import { stringify } from "querystring";
import axios from "services/_base/_axios";

class PortServices {
  public async fetchAll(params: Record<"page", number>) {
    const response = await axios.get(`/ports?${stringify(params)}`);

    const data = {
      data: {
        data: response.data.data.map((record) => {
          const attributes = produce(record.attributes, (draft) => {
            draft.properties = { ...draft, ...draft.properties };
            delete draft.properties.geometry;
          });
          return attributes;
        }),
      },
    };

    return data;
  }
}

export default new PortServices();
