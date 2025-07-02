import {
  format,
  formatDistanceToNow as formatFnsDistanceToNow,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDateTime(dateTime: string): string {
  const date = new Date(dateTime);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatDistanceToNow(dateTime: string): string {
  const date = new Date(dateTime);

  return formatFnsDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
