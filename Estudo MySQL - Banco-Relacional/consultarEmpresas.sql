-- relacionando tabela de N para N

select e.nome as Empresa, c.nome as Cidade
from empresas e, empresas_unidade eu, cidades c
where e.id = eu.empresa_id and c.id= eu.cidade_id and sede