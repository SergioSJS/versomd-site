// The waitlist form, enhanced: the same POST, sent with fetch and answered
// in place. Without this file the form still works (a POST, then a page).
(() => {
  const forms = document.querySelectorAll("form[data-waitlist]");
  for (const form of forms) {
    const input = form.querySelector('input[name="email"]');
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector(".status");
    if (!input || !button || !status || !window.fetch) continue;
    const label = button.textContent;

    const say = (text, tone) => {
      status.textContent = text;
      status.dataset.tone = tone;
    };

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      input.removeAttribute("aria-invalid");
      button.disabled = true;
      button.textContent = form.dataset.sending || label;
      say("", "");
      let result = "failed";
      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new URLSearchParams(new FormData(form)),
        });
        const body = await response.json().catch(() => ({}));
        if (response.ok && body.ok) result = "ok";
        else if (body.error === "invalid_email") result = "invalid";
        else if (body.error === "rate_limited") result = "limited";
      } catch {
        result = "failed";
      }
      button.disabled = false;
      button.textContent = label;
      if (result === "ok") {
        say(form.dataset.ok, "ok");
        form.classList.add("is-done");
        input.value = "";
      } else {
        say(form.dataset[result] || form.dataset.failed, "error");
        if (result === "invalid") input.setAttribute("aria-invalid", "true");
        input.focus();
      }
    });
  }
})();
