select * from prefeito;
select * from cidades;

select * from cidades c inner join prefeito p on c.id = p.cidade_id;
-- Pegando apenas o lado esquerdo do Join nesse caso é a cidade
select * from cidades c left outer join prefeito p on c.id = p.cidade_id;
-- Pegando apenas agora do lado direito do Join nesse caso é o prefeito, vai ser mostrado apenas prefeito
select * from cidades c right join prefeito p on c.id = p.cidade_id;
-- Full Joi pegando todos os campos independente de cidade ou prefeito, mas como esse "full" ele não pega vamos utilizar o "UNION" unindo a consulta left e righ
select * from cidades c full join prefeito p on c.id = p.cidade_id;

-- UNION
select * from cidades c left join prefeito p on c.id = p.cidade_id;
UNION ALL
select * from cidades c right join prefeito p on c.id = p.cidade_id;