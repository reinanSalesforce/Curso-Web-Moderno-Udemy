CREATE TABLE IF NOT EXISTS empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int unsigned,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);


-- Criação de outra tabela para ligar a tabela de empresas e cidades em vez de ter um ForeignKey

CREATE TABLE IF NOT EXISTS empresas_unidade (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede  TINYINT(1) NOT NULL,
    PRIMARY KEY (empresa_id, cidade_id)
);

