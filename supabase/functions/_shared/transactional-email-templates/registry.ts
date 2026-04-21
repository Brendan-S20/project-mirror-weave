/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as projectIntakeConfirmation } from './project-intake-confirmation.tsx'
import { template as strategyCallConfirmation } from './strategy-call-confirmation.tsx'
import { template as internalProjectNotification } from './internal-project-notification.tsx'
import { template as internalStrategyNotification } from './internal-strategy-notification.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'project-intake-confirmation': projectIntakeConfirmation,
  'strategy-call-confirmation': strategyCallConfirmation,
  'internal-project-notification': internalProjectNotification,
  'internal-strategy-notification': internalStrategyNotification,
}