/* eslint-disable @typescript-eslint/no-magic-numbers */
interface HttpCode {
  code: number;
  text: string;
}

const httpCodes: HttpCode[] = [
  {
    code: 100,
    text: 'Continue',
  },
  {
    code: 101,
    text: 'Switching protocols',
  },
  {
    code: 102,
    text: 'Processing',
  },
  {
    code: 103,
    text: 'Early Hints',
  },
  {
    code: 200,
    text: 'OK',
  },
  {
    code: 201,
    text: 'Created',
  },
  {
    code: 202,
    text: 'Accepted',
  },
  {
    code: 203,
    text: 'Non-Authoritative Information',
  },
  {
    code: 204,
    text: 'No Content',
  },
  {
    code: 205,
    text: 'Reset Content',
  },
  {
    code: 206,
    text: 'Partial Content',
  },
  {
    code: 207,
    text: 'Multi-Status',
  },
  {
    code: 208,
    text: 'Already Reported',
  },
  {
    code: 226,
    text: 'IM Used',
  },
  {
    code: 300,
    text: 'Multiple Choices',
  },
  {
    code: 301,
    text: 'Moved Permanently',
  },
  {
    code: 302,
    text: 'Found',
  },
  {
    code: 303,
    text: 'See Other',
  },
  {
    code: 304,
    text: 'Not Modified',
  },
  {
    code: 305,
    text: 'Use Proxy',
  },
  {
    code: 306,
    text: 'Switch Proxy',
  },
  {
    code: 307,
    text: 'Temporary Redirect',
  },
  {
    code: 308,
    text: 'Permanent Redirect',
  },
  {
    code: 400,
    text: 'Bad Request',
  },
  {
    code: 401,
    text: 'Unauthorized',
  },
  {
    code: 402,
    text: 'Payment Required',
  },
  {
    code: 403,
    text: 'Forbidden',
  },
  {
    code: 404,
    text: 'Not Found',
  },
  {
    code: 405,
    text: 'Method Not Allowed',
  },
  {
    code: 406,
    text: 'Not Acceptable',
  },
  {
    code: 407,
    text: 'Proxy Authentication Required',
  },
  {
    code: 408,
    text: 'Request Timeout',
  },
  {
    code: 409,
    text: 'Conflict',
  },
  {
    code: 410,
    text: 'Gone',
  },
  {
    code: 411,
    text: 'Length Required',
  },
  {
    code: 412,
    text: 'Precondition Failed',
  },
  {
    code: 413,
    text: 'Payload Too Large',
  },
  {
    code: 414,
    text: 'URI Too Long',
  },
  {
    code: 415,
    text: 'Unsupported Media Type',
  },
  {
    code: 416,
    text: 'Range Not Satisfiable',
  },
  {
    code: 417,
    text: 'Expectation Failed',
  },
  {
    code: 418,
    text: 'I\'m a Teapot',

  },
  {
    code: 421,
    text: 'Misdirected Request',
  },
  {
    code: 422,
    text: 'Unprocessable Entity',
  },
  {
    code: 423,
    text: 'Locked',
  },
  {
    code: 424,
    text: 'Failed Dependency',
  },
  {
    code: 425,
    text: 'Too Early',
  },
  {
    code: 426,
    text: 'Upgrade Required',
  },
  {
    code: 428,
    text: 'Precondition Required',
  },
  {
    code: 429,
    text: 'Too Many Requests',
  },
  {
    code: 431,
    text: 'Request Header Fields Too Large',
  },
  {
    code: 451,
    text: 'Unavailable For Legal Reasons',
  },
  {
    code: 500,
    text: 'Internal Server Error',
  },
  {
    code: 501,
    text: 'Not Implemented',
  },
  {
    code: 502,
    text: 'Bad Gateway',
  },
  {
    code: 503,
    text: 'Service Unavailable',
  },
  {
    code: 504,
    text: 'Gateway Timeout',
  },
  {
    code: 505,
    text: 'HTTP Version Not Supported',
  },
  {
    code: 506,
    text: 'Variant Also Negotiates',
  },
  {
    code: 507,
    text: 'Insufficient Storage',
  },
  {
    code: 508,
    text: 'Loop Detected',
  },
  {
    code: 510,
    text: 'Not Extended',
  },
  {
    code: 511,
    text: 'Network Authentication Required',
  },
];

type UseHttpCodes = () => {
  httpCodes: HttpCode[];
  findByCode: (code: number) => HttpCode | undefined;
};

export const useHttpCodes: UseHttpCodes = () => {
  const findByCode: ReturnType<UseHttpCodes>['findByCode'] = (code) => {
    return httpCodes.find((httpCode) => httpCode.code === code);
  };

  return {
    httpCodes,
    findByCode,
  };
};
