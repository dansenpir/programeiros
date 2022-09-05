interface IDivider {
  size: 'sm' | 'lg';
  style: 'gradient' | 'orange';
}

const Divider = ({ size, style }: IDivider) => {
  const height = size === 'sm' ? 'h-1.3px' : size === 'lg' && 'h-1.5';
  const bgColor =
    style === 'gradient'
      ? 'bg-gradient-to-r from-green to-blue.500'
      : style === 'orange' && 'bg-orange';

  return <div className={`w-full ${height} ${bgColor}`} />;
};

export { Divider };
