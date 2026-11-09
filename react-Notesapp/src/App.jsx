import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [notes,setNotes]=useState([]);
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  function submitHandler(e){
    e.preventDefault();
      const newNotes=[...notes,{title,content}];
      setNotes(newNotes);

      localStorage.setItem("notes",JSON.stringify(newNotes));
      setTitle("");
      setContent("");
  }

  useEffect(()=>{
    const snotes= JSON.parse(localStorage.getItem("notes")) || [];

    setNotes(snotes);

  },[]);
  return (
    <main className="min-h-screen bg-[#faf8f4] px-5 py-12 text-[#292822]">
      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            My Notes
          </h1>
          <p className="mt-2 text-sm text-[#858174]">
            A little space for your thoughts.
          </p>
        </header>

        {/* Note Form */}
        <form className="rounded-2xl border border-[#eee9df] bg-white p-6 shadow-sm" onSubmit={(e)=>{
          submitHandler(e);
        }}>

          <label className="mb-2 block text-sm font-medium text-[#514e45]">
            Title
          </label>

          <input
            type="text"
            placeholder="Enter note title..."
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
            }}
            className="mb-5 w-full rounded-xl border border-[#e9e5dc] bg-[#fdfcf9] px-4 py-3 text-sm outline-none transition focus:border-[#c89a70]"
          />

          <label className="mb-2 block text-sm font-medium text-[#514e45]">
            Content
          </label>

          <textarea
            rows="4"
            placeholder="Write your note here..."
            value={content}
            onChange={(e)=>{
              setContent(e.target.value);
            }}
            className="mb-5 w-full resize-none rounded-xl border border-[#e9e5dc] bg-[#fdfcf9] px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#c89a70]"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#a66a42] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8e5835]"
          >
            + Add Note
          </button>
        </form>

        {/* Notes Section */}
        <section className="mt-10">

          <h2 className="mb-5 text-lg font-semibold">
            Your Notes
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            {notes.map((note) => (
              <article
                key={note.id}
                className="relative rounded-xl border border-[#eee2cc] bg-[#fff9ed] p-5 shadow-sm"
              >
                {/* Pushpin */}
                <div className="absolute right-5 top-5 size-3 rounded-full bg-[#d47761] shadow-sm" />

                <h3 className="mb-3 pr-6 font-semibold">
                  {note.title}
                </h3>

                <p className="text-sm leading-6 text-[#777164]">
                  {note.content}
                </p>
              </article>
            ))}

          </div>
        </section>

      </div>
    </main>
  );
}

export default App;