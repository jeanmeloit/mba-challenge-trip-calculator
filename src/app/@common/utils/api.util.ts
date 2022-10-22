export class ApiUtil {
  public static readonly prefixes: Readonly<Prefixes> = {
    local: 'http://localhost:3000'
  };
}

interface Prefixes {
  local: string;
}
