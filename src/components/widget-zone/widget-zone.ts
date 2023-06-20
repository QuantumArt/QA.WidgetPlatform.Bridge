import { useZoneStore } from 'src/stores/zone/zone-store';

interface IProps {
  /* Имя зоны */
  name: string;
}

export default function WidgetZone(props: IProps): JSX.Element {
  const store = useZoneStore();
  return store.getZoneComponent(props.name);
}
