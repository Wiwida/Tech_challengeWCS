BEGIN;

-- -----------------------------------------------------
-- Table "members"
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "members" (

  "id" serial PRIMARY KEY,
  "name" text NOT NULL,
  "quality" text NOT NULL,
  "hobbie" text NOT NULL

);


COMMIT;