"""empty message

Revision ID: c165d1929a38
Revises: 
Create Date: 2024-05-10 19:29:48.159876

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c165d1929a38'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('img', sa.String(), nullable=False),
    sa.Column('bodytext', sa.String(length=120), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('img')
    )
    op.create_table('suggestion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('suggesting', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('id_post', sa.Integer(), nullable=True),
    sa.Column('comment', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_post'], ['post.id'], ),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('like',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('id_post', sa.Integer(), nullable=True),
    sa.Column('like', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['id_post'], ['post.id'], ),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('like')
    op.drop_table('comment')
    op.drop_table('suggestion')
    op.drop_table('post')
    op.drop_table('user')
    # ### end Alembic commands ###