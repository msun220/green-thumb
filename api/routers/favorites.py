from fastapi import Depends, APIRouter, HTTPException
from queries.favorites import FavoritesQueries, FavoriteIn
from typing import Optional
from pydantic import BaseModel
from authenticator import authenticator

class Favorite(BaseModel):
    user_id: str
    api_id: str
    id: str

router = APIRouter()

@router.post('/api/account/{user_id}/favorites')
def create_favorite(
    user_id: str,
    api_id: str,
    favorite_in = Depends(FavoriteIn),
    account_data: Optional[dict] = Depends(authenticator.try_get_current_account_data),
    repo: FavoritesQueries = Depends()
):
    favorite_in.user_id = user_id
    favorite_in.api_id = api_id
    if account_data:
        return repo.create_favorite(favorite_in)
    else:
        raise HTTPException(status_code=404, detail="User not logged in")


@router.get('/api/account/{user_id}/favorites')
def get_favorites(
    user_id: str,
    account_data: Optional[dict] = Depends(authenticator.try_get_current_account_data),
    repo: FavoritesQueries = Depends()
):
    if account_data:
        return repo.get_all_favorites(user_id)
    else:
        raise HTTPException(status_code=404, detail="User not logged in")

@router.delete("/api/account/favorites/{id}", response_model = bool)
def delete_favorite(
    id: int,
    account_data: Optional[dict] = Depends(authenticator.try_get_current_account_data),
    repo: FavoritesQueries = Depends(),
) -> bool:
    if account_data:
        return repo.delete_favorite(id)
    else:
        raise HTTPException(status_code=404, detail="User not logged in")