const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;

function getAuthHeader() {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("access_token");
  return token ? { "Authorization": `Bearer ${token}` } : {};
}

export async function analyzeResume(file, jobRole) {
  const form = new FormData();
  form.append("file", file);
  form.append("job_role", jobRole);

  const res = await fetch(`${BACKEND}/api/analyze-resume`, {
    method: "POST",
    headers: getAuthHeader(),
    body: form,
  });

  if (!res.ok) throw new Error(`Server error ${res.status}`);
  return res.json();
}

export async function sendChat(resumeText, jobRole, history, userMessage, category = "technical") {
  const res = await fetch(`${BACKEND}/api/interview/chat`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      ...getAuthHeader()
    },
    body: JSON.stringify({
      resume_text: resumeText,
      job_role: jobRole,
      conversation_history: history,
      user_message: userMessage,
      category: category,
    }),
  });

  if (!res.ok) throw new Error(`Server error ${res.status}`);
  return res.json();
}
