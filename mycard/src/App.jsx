import MyCard from "./MyCard";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
      padding: "20px"
    }}>
      <MyCard
        name="Birat Lodi"
        team="India"
        role="Batsman"
        image="https://media.gettyimages.com/id/2159845100/photo/final-icc-mens-t20-cricket-world-cup-west-indies-usa-2024.jpg?s=594x594&w=gi&k=20&c=jH79XlNkMyaLmlDLv-wKhj-PB8Z7zxJ4cAjz-pVU6p0="
      />

      <MyCard
        name="Ye madarchod players hai"
        team="Ye chutiye ne paise khaye hai WC ke time"
        role="Wicket-Keeper Batsman"
        image="https://preview.redd.it/dhoni-simply-refused-to-acknowledge-that-rayudu-is-standing-v0-waq6sa7hh3re1.png?width=1264&auto=webp&s=b1b880ef3ec19543abe57f5de7f6e9698b863fea"
      />

      <MyCard
        name="Jasprit Bumrah"
        team="India"
        role="Bowler"
        image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSeZqrRyknv_vbgnqAPy5GnRO5T1_P8eET0Q2AD5F6ffGfSpG3HiAcui9FI7K_pfCliOkO61zf8YeIWxFYcoh1GcTMCuwbblptYF7LxqgDn"
      />
    </div>
  );
}

export default App;