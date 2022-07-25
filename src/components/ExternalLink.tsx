import ENVS from 'src/libs/envs';

interface Props {
  url: string;
  children: React.ReactNode;
}

export default function ExternalLink({ url, children }: Props) {
  return (
    <a
      href={`${ENVS.NEXT_PUBLIC_URL}/l?url=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
