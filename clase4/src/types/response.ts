import type { Response } from 'express'

interface ResponseJsonBase {
  status: number
  statusMessage: string
}

interface ResponseJsonData extends ResponseJsonBase {
  data: any
}

interface ResponseJsonMessage extends ResponseJsonBase {
  message: string
}

interface ResponseJsonMessageError extends ResponseJsonMessage {
  error: string
}

type Send<T = Response> = (body?: ResponseJsonData) => T
type SendMsg<T = Response> = (body?: ResponseJsonMessage) => T
type SendMsgError<T = Response> = (body?: ResponseJsonMessageError) => T

export interface customResponseData extends Response {
  json: Send<this>
}

export interface customResponseMessage extends Response {
  json: SendMsg<this>
}

export interface customResponseMessageError extends Response {
  json: SendMsgError<this>
}
