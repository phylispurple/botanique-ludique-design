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

export const TEMPLATES: Record<string, TemplateEntry> = {
  'wardian-case-registration': wardianCaseRegistration,
  'wardian-case-admin-notification': wardianCaseAdminNotification,
}
