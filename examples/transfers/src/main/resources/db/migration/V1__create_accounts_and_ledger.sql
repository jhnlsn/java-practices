create table accounts (
    id       varchar(64)    primary key,
    balance  numeric(19, 4) not null,
    currency varchar(3)     not null,
    status   varchar(16)    not null
);

create table ledger_entries (
    id           bigint generated always as identity primary key,
    from_account varchar(64)    not null references accounts (id),
    to_account   varchar(64)    not null references accounts (id),
    amount       numeric(19, 4) not null,
    currency     varchar(3)     not null,
    occurred_at  timestamptz    not null
);
