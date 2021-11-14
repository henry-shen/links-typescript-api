import * as s from 'strummer'

const urlRegex = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/

urlRegex.test('https://google.us.edi?34535/534534?dfg=g&fg')
