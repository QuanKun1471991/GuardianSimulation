import { stringify } from "querystring";
import axios from "services/_base/_axios";
import produce from "immer";

class VesselServices {
  public async fetchAll(params: Record<"imos", number>) {
    const response = await axios.get(`/vessels?${stringify(params)}`);

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

  public async simulate(imo: string, params: any) {
    axios.post(`/spires?imos[]=${imo}`, params);
  }
}

export default new VesselServices();
