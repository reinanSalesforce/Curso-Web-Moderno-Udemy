select * from estados where id = 25

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campina', 795, 31)

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 25)


-- Podemos realizar um select dentro dos "values" para pegar o ID especifico como exemplo pegando pela sigla o ID, em vez de procurar por toda a tabela

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Caruaru', 920.6, (select id from estados where sigla = 'PE'))

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Juazeiro do Norte', 248.2, (select id from estados where sigla = 'CE'))


select * from cidades 