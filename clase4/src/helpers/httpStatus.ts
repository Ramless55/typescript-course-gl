import type {
  customResponseData,
  customResponseMessage,
  customResponseMessageError
} from '#types/response'

enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503
}

export const httpResponse = {
  OK: (res: customResponseData, data: any) => {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      statusMessage: 'Success',
      data
    })
  },
  CREATED: (res: customResponseData, data: any) => {
    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      statusMessage: 'Created',
      data
    })
  },
  BAD_REQUEST: (
    res: customResponseMessageError,
    message: string,
    errorData: any
  ) => {
    return res.status(HttpStatus.BAD_REQUEST).json({
      status: HttpStatus.BAD_REQUEST,
      statusMessage: 'Bad Request',
      message,
      error: errorData
    })
  },
  UNAUTHORIZED: (res: customResponseMessage, message: string) => {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMessage: 'Unauthorized',
      message
    })
  },
  NOT_FOUND: (res: customResponseMessage, message: string) => {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMessage: 'Not found',
      message
    })
  },
  UNPROCESSABLE_ENTITY: (
    res: customResponseMessageError,
    message: string,
    errorData: any
  ) => {
    return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      statusMessage: 'Unprocessable entity',
      message,
      error: errorData
    })
  },
  INTERNAL_SERVER_ERROR: (
    res: customResponseMessageError,
    message: string,
    error: any
  ) => {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMessage: 'Internal server error',
      message,
      error: error.message
    })
  }
}
