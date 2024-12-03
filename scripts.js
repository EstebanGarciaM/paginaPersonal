// Espera a que el documento se haya cargado
document.addEventListener('DOMContentLoaded', function() {

    // Event listener para el botón que carga los proyectos
    document.getElementById('load-projects').addEventListener('click', function () {
        const githubApiUrl = 'https://api.github.com/users/EstebanGarciaM/repos'; // Cambia "tuusuario" por tu nombre de usuario de GitHub
        document.getElementById('api-results').innerHTML = '<p>Cargando proyectos...</p>'; // Mensaje temporal mientras se cargan los proyectos

        // Solicitar los repositorios de GitHub mediante AJAX usando jQuery
        $.ajax({
            url: githubApiUrl,
            method: 'GET',
            success: function (repos) {
                let output = '<ul>';
                // Limitar a los primeros 5 repositorios
                repos.slice(0, 5).forEach(function(repo) {
                    output += `
                        <li>
                            <strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong>
                            <p>${repo.description || 'Sin descripción'}</p>
                        </li>`;
                });
                output += '</ul>';
                // Coloca los resultados en el contenedor con id 'api-results'
                document.getElementById('api-results').innerHTML = output;
            },
            error: function () {
                document.getElementById('api-results').innerHTML = '<p>No se pudieron cargar los proyectos. Intenta más tarde.</p>';
            }
        });
    });
});
