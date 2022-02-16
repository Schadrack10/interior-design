export default function FooterContent() {
  return (
    <div
      style={{
        minHeight: "20vh",
        background: "#eee",
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        alignItems:'center',
        paddingRight:'48px',
        // paddingTop:'16px',
      }}
    >
      <p>
        Powered by <span style={{ textDecoration:'underline' }}>W3.CSS</span>
      </p>
    </div>
  );
}
