/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as wardianCaseRegistration } from './wardian-case-registration.tsx'
import { template as wardianCaseAdminNotification } from './wardian-case-admin-notification.tsx'
import { template as mauvaisesHerbesRegistration } from './mauvaises-herbes-registration.tsx'
import { template as mauvaisesHerbesAdminNotification } from './mauvaises-herbes-admin-notification.tsx'
import { template as teinturesVegetalesRegistration } from './teintures-vegetales-registration.tsx'
import { template as teinturesVegetalesAdminNotification } from './teintures-vegetales-admin-notification.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'wardian-case-registration': wardianCaseRegistration,
  'wardian-case-admin-notification': wardianCaseAdminNotification,
  'mauvaises-herbes-registration': mauvaisesHerbesRegistration,
  'mauvaises-herbes-admin-notification': mauvaisesHerbesAdminNotification,
  'teintures-vegetales-registration': teinturesVegetalesRegistration,
  'teintures-vegetales-admin-notification': teinturesVegetalesAdminNotification,
}
