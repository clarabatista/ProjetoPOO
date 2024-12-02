async function listarTarefas() {
    const response = await fetch('/tarefas');
    const tarefas = await response.json();
    const lista = document.getElementById('tarefas');
    lista.innerHTML = tarefas.map(t => `<li>${t.titulo}</li>`).join('');
}

document.getElementById('novaTarefa').addEventListener('submit', async (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const prazo = document.getElementById('prazo').value;

    await fetch('/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, descricao, prazo, status: 'PENDENTE' })
    });
    listarTarefas();
});

listarTarefas();
