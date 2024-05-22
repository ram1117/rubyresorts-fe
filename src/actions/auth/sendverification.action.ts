'use server'

import { urlSendVerification } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { getCookies } from '@/lib/cookies'

const SendVerificationAction = async () => {
  await makeApiRequest(
    API_METHODS.POST,
    urlSendVerification(),
    {},
    await getCookies()
  )
}

export default SendVerificationAction
