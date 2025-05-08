"""Add valves required to part remove num valves from autoclave

Revision ID: 455e264c6e0c
Revises: 99913743b1c6
Create Date: 2024-03-21 10:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '455e264c6e0c'
down_revision: Union[str, None] = '99913743b1c6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Aggiungi valves_required a Part
    op.add_column('parts', sa.Column('valves_required', sa.Integer(), nullable=False, server_default='1'))
    
    # Rimuovi num_valves da Autoclave
    op.drop_column('autoclaves', 'num_valves')


def downgrade() -> None:
    # Ripristina num_valves in Autoclave
    op.add_column('autoclaves', sa.Column('num_valves', sa.Integer(), nullable=True))
    
    # Rimuovi valves_required da Part
    op.drop_column('parts', 'valves_required')
