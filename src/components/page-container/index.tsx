export function PageContainer(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`${props.className} container mx-auto px-6`}>
      {props.children}
    </div>
  );
}
