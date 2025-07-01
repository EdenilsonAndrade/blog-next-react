import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDateTime(dateTime: string): string {
  const date = new Date(dateTime);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatRelativeDate(dateTime: string): string {
  const date = new Date(dateTime);

  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
