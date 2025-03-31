const CommentsList = () => {
  const Comments = [
    {
      id: 0,
      text: "Ten film jest najlepszy",
      postDate: "25-03-2023",
      likes: 12,
    },
    {
      id: 1,
      text: "Świetna gra aktorska!",
      postDate: "12-04-2023",
      likes: 25,
    },
    {
      id: 2,
      text: "Muzyka w tym filmie to arcydzieło.",
      postDate: "05-06-2023",
      likes: 18,
    },
    {
      id: 3,
      text: "Fabuła była trochę przewidywalna, ale i tak mi się podobało.",
      postDate: "19-07-2023",
      likes: 9,
    },
    {
      id: 4,
      text: "Nie rozumiem, dlaczego ten film ma tak dobre recenzje...",
      postDate: "30-08-2023",
      likes: 3,
    },
    {
      id: 5,
      text: "Mój ulubiony moment to scena w deszczu. Mistrzostwo!",
      postDate: "14-09-2023",
      likes: 21,
    },
    {
      id: 6,
      text: "Film był OK, ale książka była lepsza.",
      postDate: "02-10-2023",
      likes: 7,
    },
    {
      id: 7,
      text: "Zakończenie mnie totalnie zaskoczyło!",
      postDate: "15-11-2023",
      likes: 30,
    },
    {
      id: 8,
      text: "Chciałbym zobaczyć kontynuację tej historii.",
      postDate: "28-12-2023",
      likes: 16,
    },
    {
      id: 9,
      text: "Efekty specjalne były na najwyższym poziomie.",
      postDate: "10-01-2024",
      likes: 22,
    },
  ];

  return (
    <div className="w-[600px]">
      <h1 className="text-3xl font-semibold mb-6">Comments</h1>
      <div className="flex flex-col gap-3">
        {Comments.map((comment, index) => (
          <div key={index}>
            <h1>{comment.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
