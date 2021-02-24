BEGIN;

INSERT INTO "members" ("id", "name", "quality", "hobbie") VALUES
(1, 'Eleftheria', 'Vaillante', 'Pecher le requin marteau dans les cyclades'),
(2, 'Gennadios', 'Robuste', 'Monte en haut du mont Olympe torse-nu'),
(3, 'Lysimachos', 'Macho', 'Boire une biere devant les JO');

COMMIT;

BEGIN;

SELECT setval('members_id_seq', (SELECT MAX(id) from "members"));

COMMIT;