-- Fazendo um select para mais de uma tabela em um mesmo select e informando no WHERE que a chave primaria da primeira tabela é igual a foreignKey dá segunda tabela
select e.nome as Estados, c.nome as Cidades, regiao
from estados e, cidades c
where e.id = c.estado_id

-- Outra forma de realizar o que está acima

select e.nome as Estados, c.nome as Cidades, regiao
from estados e
inner join cidades c on e.id = c.estado_id