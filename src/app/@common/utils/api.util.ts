export class ApiUtil {
  public static readonly prefixes: Readonly<Prefixes> = {
    local: 'http://localhost:3000',
    mocklab: 'https://mbachallengecountries.mocklab.io'
  };
}

interface Prefixes {
  local: string;
  mocklab: string;
}
