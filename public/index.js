$(function () {
    $("form").submit(async function (event) {
        event.preventDefault();
        try {
            const response = await fetch('/api/note/new', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: $('#note').val() })
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        } catch (error) {
            console.error(error.message);
        }
    });
});