import { useEffect, useState } from 'react';

const TZ = 'America/Los_Angeles';
const PREFIX = 'CALIFORNIA';

export default function Clock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const format = () => {
      const now = new Date();
      const s = now.toLocaleString('en-CA', {
        timeZone: TZ,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).replace(',', '').replace(/\//g, '-');
      const offsetPart = new Intl.DateTimeFormat('en-US', {
        timeZone: TZ,
        timeZoneName: 'short',
      })
        .formatToParts(now)
        .find((part) => part.type === 'timeZoneName')?.value;
      setTime(`${PREFIX} - ${s} ${offsetPart ?? ''}`.trim());
    };
    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="text-xs tabular-nums">{time || '—'}</span>;
}
